import * as React from "react";
import { to24hoursNoSecondsFormat } from "./to24hoursNoSecondsFormat";
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
  chakra,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";

/**
 * Generates table headers from data's datum fields
 * translates fields to spanish and parses those fields
 * uncommon symbols to a better representation
 *
 * @param string "beings" or any | if "beings" fields are genereted for beings
 *  - example "name" to nombre else "titulo"
 * @param datum object example {name: "Carlos"}
 * @param deleteFields []String | Array whose strings should matche datum's fields if they were to be excluded
 * example ["name", id]
 */

/**
 * There's probably a better way to do this
 */
function translateToSpanish(tableHeaderName, type) {
  return tableHeaderName
    .replace(/name/i, type === "beings" ? "nombre" : "titulo")
    .replace(/_/g, " ")
    .replace(/[ ]At$|URL$/gi, "")
    .replace(/image/i, type === "beings" ? "fotografía" : "imagen")
    .replace(/profile/i, "")
    .replace(/order/i, "orden")
    .replace(/created/i, "creado")
    .replace(/deleted/i, "eliminado")
    .replace(/updated/i, "modificado")
    .replace(/email/i, "correo electrónico")
    .replace(/.*verified$/i, "correo e. verificado");
}

export const GenericTableHead = ({
  type = "beings",
  datum = { "Empty header": "" },
  deleteFields,
  ...props
}) => {
  datum.acciones = "";
  const TheadCells = () =>
    Object.keys(datum).map((title, index) =>
      deleteFields.includes(title) ? null : (
        <Th
          textAlign="center"
          key={`thth#${index}`}
          children={translateToSpanish(title, type)}
        />
      )
    );
  return (
    <Thead {...props}>
      <Tr h="15%">
        <TheadCells />
      </Tr>
    </Thead>
  );
};

/**
 * Generates a Table that lists given data
 *
 * @param data Array<{}> example [ {name: "Carlos"},  {title: "Libro Sexto", Date: "1948"} ]
 * @param deleteFields []String | Array whose strings should match datum's fields if they were to be excluded
 * @param endpoint api path that will be used for actions requests
 * @param ...TbProps all custom props passed to this component
 */
export const GenericTableBody = ({
  data,
  deleteFields,
  endpoint,
  ...TbProps
}) => {
  const TableRows = () =>
    data?.map((datum, index) => {
      datum.acciones = <ActionLinks endpoint={endpoint} id={datum.id} />;
      const TRCProps = { parentKey: `tbtr#${index}`, datum, deleteFields };
      return (
        <Tr
          key={`tbtr#${index}`}
          height="15vh"
          children={<TableRowCells {...TRCProps} />}
        />
      );
    });
  return <Tbody {...TbProps} children={<TableRows />} />;
};

const ActionLinks = ({ endpoint, id }) => {
  const LinkContents = ({ Icon = () => null, text = "" }) => (
    <Flex justify="center" align="center">
      <Icon size={24} /> {text}
    </Flex>
  );
  return (
    <React.Fragment>
      <ChakraUILink
        as={RouterLink}
        to={`/backoffice/${endpoint}/${id}`}
        children={<LinkContents Icon={FaUserEdit} />}
      />
      <ChakraUILink
        as={RouterLink}
        to={`/backoffice/${endpoint}/${id}`}
        children={<LinkContents Icon={TiUserDelete} />}
      />
    </React.Fragment>
  );
};
/**
 * Generates all data that should be displayed in a row
 *
 * @param datum object example {name: "Carlos"}
 * @param parentKey row key string to append to its dataCells that avoids colission
 * @param deleteFields []String | Array whose strings should match datum's fields if they were to be excluded
 */
const TableRowCells = ({
  datum = { "Empty data": "Empty Data" },
  parentKey,
  deleteFields,
}) => {
  return Object.entries(datum).map(([key, value], index) => {
    if (deleteFields.includes(key)) {
      return null;
    }
    const isDateField = /At$/i.test(key);
    const isImageField = /image/i.test(key);
    if (isDateField) {
      value = to24hoursNoSecondsFormat(value);
    } else if (isImageField) {
      const defaultImg =
        "https://starwhitedental.com/wp-content/uploads/2018/12/Team-Member-Male-Placeholder.png";
      value = (
        <Image
          borderRadius="full"
          h="100px"
          w="100px"
          display="initial"
          objectFit="cover"
          alt="Member photo"
          fallbackSrc={defaultImg}
          src={value}
        />
      );
    }
    return (
      <Td
        m="0 auto"
        height="15vh"
        p="1"
        verticalAlign="middle"
        textAlign="center"
        key={`${parentKey}th#${index}`}
        children={value ?? "Sin especificar"}
      />
    );
  });
};

/**
 * Generates a Table that lists given data
 *
 * @param string "beings" or any | if "beings" fields are genereted for beings
 *  - example "name" to nombre else "titulo"
 * @param data Array<{}> example [ {name: "Carlos"},  {title: "Libro Sexto", Date: "1948"} ]
 * @param deleteFields []String | Array whose strings should matche datum's fields if they were to be excluded
 * @param caption string Table's caption text
 * @param endpoint api path that will be used for actions requests
 * @param ...rest  any other prop which should be the ones that  a Chakra Flex component accepts except OverflowX and any other
 * that may affect that prop
 * @param createButtonStyles It sets the styles props of the Create button at the top which is a chakra.sub
 */
export const GenericList = ({
  type = "beings",
  data = [],
  caption = "Empty Title",
  excludeFields = [],
  endpoint = "",
  createButtonStyles = {
    p: "1",
    rounded: "md",
    bgColor: "#333",
    color: "white",
  },
  ...rest
}) => {
  // if ...rest parameter contains the same props the defaults are overwritten
  const styleProps = {
    bgColor: "white",
    margin: "0 auto",
    rounded: "md",
    h: "100vh",
    w: "90%",
    ...rest,
  };
  return (
    <>
      <Flex overflowX="auto" {...styleProps}>
        <Table h="100%">
          <TableCaption
            placement="top"
            position="sticky"
            w="90vw"
            h="5%"
            p="0"
            left={0}
          >
            <ChakraUILink
              textAlign="left"
              fontWeight="bold"
              as={RouterLink}
              to={
                endpoint ? `/backoffice/${endpoint.toLowerCase()}/create` : `/`
              }
              _hover={{}}
              fontSize={{ base: "md", sm: "lg" }}
            >
              {caption + " "}
              <chakra.sub {...createButtonStyles}>{`Crear`}</chakra.sub>
            </ChakraUILink>
          </TableCaption>
          <GenericTableHead
            h="5%"
            w="100%"
            position="sticky"
            top={0}
            type={type}
            backgroundColor="white"
            datum={data[0]}
            deleteFields={excludeFields}
          />
          <GenericTableBody
            h="90%"
            overflowY="auto"
            data={data}
            endpoint={endpoint}
            color="#333"
            deleteFields={excludeFields}
          />
        </Table>
      </Flex>
    </>
  );
};
