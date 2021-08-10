import * as React from "react";
import axios from "axios";
import { GenericList } from "../common/GenericList";
import { Stack, Skeleton } from "@chakra-ui/react";
import { API_BASE_URL } from "../../common/configurations";
export const UsersList = () => {
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    message: "",
  };

  const [usersResponseData, setUsersResponseData] =
    React.useState(undefinedResponse);

  React.useEffect(() => {
    axios
      .get(API_BASE_URL + "/users")
      .then((response) => setUsersResponseData(response.data))
      .catch((error) => setUsersResponseData(error.response?.data));
  }, []);
  return usersResponseData.success ? (
    <GenericList
      data={usersResponseData.data}
      caption={"Lista de Usuarios"}
      endpoint={"users"}
      excludeFields={[
        "id",
        "longitude",
        "latitude",
        "password",
        "address",
        "group_id",
        "role_id",
        "remember_token",
        "facebookUrl",
        "linkedinUrl",
        "email",
        "email_verified_at",
        "created_at",
        "deleted_at",
        "updated_at",
      ]}
    />
  ) : (
    <Stack p="2%">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};
