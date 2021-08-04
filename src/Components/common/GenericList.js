import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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
        children={fieldName.replace(/_|URL$/gi, " ").replace(/image/i, "photo")}
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
  return (
    <Tbody {...props}>
      <TableRows />
    </Tbody>
  );
};

const ActionLinks = ({ endpoint, id }) => (
  <>
    <ChakraUILink
      as={RouterLink}
      to={`/backoffice/${endpoint}/edit/${id}`}
      children={<FaUserEdit size={16} color="green" /> ?? "Edit"}
    />
    <ChakraUILink
      as={RouterLink}
      to={`/backoffice/${endpoint}/delete/${id}`}
      children={<TiUserDelete color="red" size={16} /> ?? "Delete"}
    />
  </>
);
const TableRowCells = ({
  datum = { "Empty data": "Empty Data" },
  ParentKey,
}) => {
  return Object.entries(datum).map(([key, value], index) => {
    if (/At$/i.test(key)) {
      value = new Date(value).toLocaleString();
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

export const GenericList = ({
  data = [],
  caption = "Empty Title",
  excludeFields = [],
  endpoint = "",
}) => {
  return (
    <>
      <ChakraUILink
        textAlign="left"
        children={`Create ${endpoint.replace(/s$/i, "")}`}
        as={RouterLink}
        to={endpoint ? `/backoffice/${endpoint.toLowerCase()}/create` : `/`}
      />
      <Flex overflow="auto" h="100vh" w="100%">
        <Table>
          <TableCaption
            placement="top"
            position="sticky"
            w="100%"
            left={0}
            children={caption}
          />
          <GenericTableHead
            position="sticky"
            top={0}
            backgroundColor="white"
            datum={data[0]}
            deleteFields={excludeFields}
          />
          <GenericTableBody
            data={data}
            endpoint={endpoint}
            deleteFields={excludeFields}
          />
        </Table>
      </Flex>
    </>
  );
};
