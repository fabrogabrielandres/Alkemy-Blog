import * as React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";
import { GenericList } from "../common/GenericList";
import { useDispatch, useSelector } from "react-redux";
import { listgetSlides } from "../../features/Slides/slidesSlice";
import { useEffect } from "react";
export const SlidesList = () => {

const dispatch = useDispatch()
const listSlides = useSelector(state => state.slide.listSlides)

useEffect(() => {
  dispatch(listgetSlides())
}, [dispatch])


  return  listSlides.length>0 ?(
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
      data={listSlides}
      caption={"Lista de Slides"}
      type="things"
      endpoint="slides"
    />
   ) 
  : (
    <Stack p="2%">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};
