const App = () => {
  const [input, setInput] = React.useState("#First line\n\n##Second Line\n\n###Third Line\n\nEtc...");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "editor shadow container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-name"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fa-brands fa-free-code-camp"
  }), /*#__PURE__*/React.createElement("h3", null, "Editor")), /*#__PURE__*/React.createElement("i", {
    class: "fa-solid fa-maximize"
  })), /*#__PURE__*/React.createElement("textarea", {
    className: "editor-field field",
    type: "text",
    onChange: event => setInput(event.target.value)
  }, input)), /*#__PURE__*/React.createElement("div", {
    className: "previewer shadow container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo-name"
  }, /*#__PURE__*/React.createElement("i", {
    class: "fa-brands fa-free-code-camp"
  }), /*#__PURE__*/React.createElement("h3", null, "Previewer")), /*#__PURE__*/React.createElement("i", {
    class: "fa-solid fa-maximize"
  })), /*#__PURE__*/React.createElement("div", {
    className: "previewer-field field"
  })));
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));