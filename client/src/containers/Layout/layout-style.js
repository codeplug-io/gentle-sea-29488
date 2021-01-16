// .content {
//   margin-top: 160px;
// }
// .Content:hover {
//   color: red;
// }
// h3 {
//   color: green;
// }
// .blue {
//   color: blue;
// }
// .container {
//   position: relative;
//   margin: auto;
//   width: 100%;
// }
// @media (min-width: 700px) {
//   .container {
//     background-color: purple;
//     text-align: center;
//   }
// }

const style = {
  Content: {
    backgroundColor: "#212121",
    left: "0",
    right: "0",
    border: "0",
    boxSizing: "border-box",
    width: "auto"
  },
  toolbar: {
    color: "blue",
    ":hover": {
      color: "red"
    }
  },
  Main: {
    marginTop: "72px"
  },
  bold: {
    fontWeight: "bold"
  },
  q: {
    "@media (max-width: 700px )": {
      marginTop: "60px",
      backgroundColor: "transparent",
      textAlign: "center"
    }
  }
};

export default style;
