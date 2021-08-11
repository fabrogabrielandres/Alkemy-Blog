import * as React from "react";
import axios from "axios";
import { Stack, Skeleton } from "@chakra-ui/react";
import { API_BASE_URL } from "../../common/configurations";
import { GenericList } from "../common/GenericList";
import { getSlides } from "../../Services/slidesApiService";
export const SlidesList = () => {
  const undefinedResponse = {
    success: undefined,
    data: undefined,
    errors: undefined,
    message: "Petición en proceso",
  };
  const [slidesResponse, setSlidesResponse] = React.useState(undefinedResponse);
  React.useEffect(() => {
    getSlides()
      .then((response) => setSlidesResponse(response.data))
      .catch((error) => setSlidesResponse(error.response?.data));
  }, []);
  return slidesResponse.success ? (
    <GenericList
      excludeFields={[
        "description",
        "group_id",
        "id",
        "user_id",
        "created_at",
        "deleted_at",
        "updated_at",
      ]}
      data={slidesResponse.data}
      caption={"Lista de Slides"}
      type="things"
      endpoint="slides"
    />
  ) : (
    <Stack p="2%">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};
