import * as React from "react";
import { Stack, Skeleton } from "@chakra-ui/react";
import { GenericList } from "../common/GenericList";
import { useDispatch, useSelector } from "react-redux";
import { listgetMembers } from "../../features/Members/membersSlice";
import { useEffect } from "react";
export const MemberList = () => {
  const dispatch = useDispatch();
  const listMembers = useSelector((state) => state.members.listMembers);

  useEffect(() => {
    dispatch(listgetMembers());
  }, [dispatch]);

  return listMembers.length > 0 ? (
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
      data={listMembers}
      caption={"Lista de Miembros"}
      type="things"
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
