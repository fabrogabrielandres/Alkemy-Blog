import * as React from "react";
import axios from "axios";
import { API_BASE_URL } from "../../common/configurations";
import { ActivitiesAlert } from "./ActivitiesAlert";
import { GenericSection } from "../common/GenericSection";

export const ActivitiesSection = () => {
  const endpoint = "activities";
  const [
    { success = undefined, data = [], errors = "", message = "" },
    setActivitiesResponse,
  ] = React.useState({});
  React.useEffect(() => {
    axios
      .get(API_BASE_URL + "/" + endpoint)
      .then((response) => setActivitiesResponse(response.data))
      .catch((exception) => setActivitiesResponse(exception.response));
  }, []);
  const sectionSettings = { endpoint, title: "actividades", data };
  return success !== false ? (
    <GenericSection {...sectionSettings} />
  ) : (
    <ActivitiesAlert message="Algo falló al cargar las actividades" />
  );
};
