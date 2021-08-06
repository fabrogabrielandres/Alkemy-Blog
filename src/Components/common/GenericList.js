import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Image,
  Link as ChakraUILink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";

export const GenericTableHead = ({
  datum = { "Empty header": "" },
  deleteFields,
  ...props
}) => {
  datum.actions = "No actions";
  deleteFields.forEach((field) => delete datum[field]);
  const TheadCells = () =>
    Object.keys(datum).map((fieldName, index) => (
      <Th
        key={`thth#${index}`}
        children={fieldName
          .replace(/_/g, " ")
          .replace(/[ ]At$|URL$/gi, "")
          .replace(/image/i, "photo")}
      />
    ));
  return (
    <Thead {...props}>
      <Tr>
        <TheadCells />
      </Tr>
    </Thead>
  );
};

export const GenericTableBody = ({
  data,
  deleteFields,
  endpoint,
  ...props
}) => {
  const TableRows = () =>
    data?.map((datum, index) => {
      datum.actions = <ActionLinks endpoint={endpoint} id={datum.id} />;
      deleteFields.forEach((field) => {
        delete datum[field];
      });
      return (
        <Tr
          key={`tbtr#${index}`}
          children={<TableRowCells parentKey={`tbtr#${index}`} datum={datum} />}
        />
      );
    });
  return <Tbody {...props} children={<TableRows />} />;
};

const ActionLinks = ({ endpoint, id }) => {
  const LinkContents = ({ Icon = () => null, text = "" }) => (
    <Flex justify="center" align="center">
      <Icon size={16} /> {text}
    </Flex>
  );
  return (
    <React.Fragment>
      <ChakraUILink
        as={RouterLink}
        to={`/backoffice/${endpoint}/edit/${id}`}
        children={<LinkContents Icon={FaUserEdit} />}
      />
      <ChakraUILink
        as={RouterLink}
        to={`/backoffice/${endpoint}/delete/${id}`}
        children={<LinkContents Icon={TiUserDelete} />}
      />
    </React.Fragment>
  );
};
const TableRowCells = ({
  datum = { "Empty data": "Empty Data" },
  ParentKey,
}) => {
  return Object.entries(datum).map(([key, value], index) => {
    if (/At$/i.test(key)) {
      const dateFormat = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      value = new Date(value).toLocaleString([], dateFormat);
    } else if (/image/i.test(key)) {
      const defaultImg =
        "https://starwhitedental.com/wp-content/uploads/2018/12/Team-Member-Male-Placeholder.png";
      value = (
        <Image
          borderRadius="full"
          objectFit="cover"
          alt="Member photo"
          fallbackSrc={defaultImg}
          src={value}
        />
      );
    }
    return <Td key={`${ParentKey}th#${index}`} children={value ?? "Unknown"} />;
  });
};

/**
 * It's important that this element's height
 */
export const GenericList = ({
  data = [],
  caption = "Empty Title",
  excludeFields = [],
  endpoint = "",
}) => {
  return (
    <React.Fragment>
      <ChakraUILink
        textAlign="left"
        children={`Create ${endpoint.replace(/s$/i, "")}`}
        as={RouterLink}
        to={endpoint ? `/backoffice/${endpoint.toLowerCase()}/create` : `/`}
      />
      <Flex overflowX="auto" h="100vh" w="100%">
        <Table h="100%">
          <TableCaption
            placement="top"
            position="sticky"
            w="100vw"
            h="5%"
            left={0}
            children={caption}
          />
          <GenericTableHead
            h="5%"
            w="100%"
            position="sticky"
            top={0}
            backgroundColor="white"
            datum={data[0]}
            deleteFields={excludeFields}
          />
          <GenericTableBody
            h="90%"
            overflowY="auto"
            data={data}
            endpoint={endpoint}
            deleteFields={excludeFields}
          />
        </Table>
      </Flex>
    </React.Fragment>
  );
};
