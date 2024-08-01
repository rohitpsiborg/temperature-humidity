"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  IconButton,
  DialogActions,
  Button,
  DialogContent,
} from "@mui/material";
// ** core component
import { MdOutlineAssignment } from "react-icons/md";
import CommonDialog from "../common-dialog";
import CustomTooltip from "../../Tooltip";
import FirstTab from "../assign-dialog/SelectTab";
import ToastComponent, {
  notifyError,
  notifySuccess,
} from "@/app/(components)/mui-components/Snackbar";
import ConfirmationDialog from "@/app/(components)/mui-components/Dialog/confirmation-dialog";

export default function AssignAssessment() {
  const { handleSubmit } = useForm();
  const [open, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<null | string>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTerm, setSeacrhTerm] = useState<string>("");
  const [itemId, setItemId] = useState<string | undefined>("");

  const totalLength: number | undefined = 10;
  const getAllList: any = {
    user: {
      data: [
        { _id: 1, assessmentName: "Object 1", uId: "ID001" },
        { _id: 2, assessmentName: "Object 2", uId: "ID002" },
      ],
      totalLength: 2,
    },
  };
  const Data = {
    search: searchTerm,
  };

  useEffect(() => {
    if (open) {
      const length = totalLength ?? 0;
      setTotalPages(Math.ceil(length / 10));
    }
  }, [open, totalLength]);

  // Function Calling

  const handleRadioChange = (
    item: any,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelect((prev: any) => (prev?._id === item._id ? null : item));
    setItemId(item._id);
  };
  const handlePagination = (page: number) => {
    const Data = {
      page: page,
      limit: 10,
    };
    setCurrentPage(page);
  };
  const handleClose = () => {
    setOpen(false);
    setSelect(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleAssessmentSubmit = async () => {
    if (!Boolean(select)) {
      notifyError("please select atleast one item !");
      return;
    }
    let Data = {};
    try {
      notifySuccess("Assign Successfull");
      handleClose();
    } catch (error) {
      handleClose();
    }
  };

  return (
    <div>
      <ToastComponent />
      <CustomTooltip title={"Assign Assessment"}>
        <IconButton onClick={handleClickOpen}>
          <MdOutlineAssignment fontSize="22px" className="cursor-point" />
        </IconButton>
      </CustomTooltip>
      <CommonDialog
        open={open}
        maxWidth={"md"}
        fullWidth={true}
        title="Assign Items"
        onClose={handleClose}
        titleConfirm={"Cancel"}
        message={"Are you sure you want to cancel ?"}
      >
        <form onSubmit={handleSubmit(handleAssessmentSubmit)}>
          <DialogContent>
            <FirstTab
              select={select}
              currentPage={currentPage}
              totalPages={totalPages}
              getAllList={getAllList}
              searchTerm={searchTerm}
              setSeacrhTerm={setSeacrhTerm}
              handlePagination={handlePagination}
              handleRadioChange={handleRadioChange}
            />
          </DialogContent>
          <DialogActions className="dialog-action-btn">
            <ConfirmationDialog
              title={"Cancel"}
              message={"Are you sure you want to cancel ?"}
              handleCloseFirst={handleClose}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </CommonDialog>
    </div>
  );
}
