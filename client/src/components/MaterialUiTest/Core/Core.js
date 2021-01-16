import React from "react";
import {
  Button,
  Input,
  Dialog,
  DialogContentText,
  Popover
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
// import classes from "./core-classes.css";
import "./core-classes.css";
import Radium from "radium";
import { classConcat } from "../../../assets/functions";

const core = props => {
  return (
    <div className="DivCore">
      <div>
        <Button
          id="dialog"
          style={{
            margin: "0 auto",
            padding: "0 auto",
            minWidth: "0"
          }}
          size="small"
        >
          <Search />

          <div className="Dialog">
            <Dialog
              open={true}
              maxWidth="xl"
              fullScreen={false}
              fullWidth={false}
              scroll="paper"
              transitionDuration={1000}
              PaperProps={{ color: "red" }}
              style={{ color: "red" }}
            >
              peee!! kadkdfnv
              <li>Children</li>
              <li>Children</li>
              <li>Children</li>
              <li>Children</li>
            </Dialog>
          </div>
        </Button>

        <Input
          placeholder="Search..."
          style={
            props.search ? { display: "inline-flex" } : { display: "none" }
          }
          className={classConcat(["InputCore"])}
        />

        <Input style={{ width: "50px" }} />
        <DialogContentText>
          <li>Children</li>
          <li>Children</li>
        </DialogContentText>

        <Popover />
      </div>
    </div>
  );
};

export default Radium(core);
// error={true} in input to specify wroung input
