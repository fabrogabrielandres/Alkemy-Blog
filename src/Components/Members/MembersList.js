import * as React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { API_BASE_URL } from "../../common/configurations";
import { GenericList } from "../common/GenericList";
const getMembersListHandler = async (setMembersResponse) => {
  const pathMembers = process.env.REACT_APP_API_MEMBERS;
  const MEMBERS_LIST_URL = API_BASE_URL + pathMembers;
  let data = undefined;
  try {
    const response = await axios.get(MEMBERS_LIST_URL);
    data = response.data;
  } catch (exception) {
    console.log(exception);
    data = exception.response.data;
  }
  setMembersResponse(data);
};
export const MembersList = () => {
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    errors: undefined,
    message: "Petición en proceso",
  };
  const [membersResponse, setMembersResponse] =
    React.useState(undefinedResponse);
  React.useEffect(() => {
    getMembersListHandler(setMembersResponse);
  }, []);
  return membersResponse.success ? (
    <GenericList
      excludeFields={[
        "description",
        "group_id",
        "id",
        "facebookUrl",
        "linkedinUrl",
        "created_at",
        "deleted_at",
        "updated_at",
      ]}
      data={membersResponse.data}
      caption={"Lista de Miembros"}
      endpoint="members"
    />
  ) : (
    <Stack p="2%">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};
