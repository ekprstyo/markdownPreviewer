const App = () => {
  const [input, setInput] = React.useState("# Heading-1\n\n## Heading-2\n\n### Heading-3\n\n#### Heading-4\n\n##### Heading-5\n\n###### Heading-6");
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
    id: "editor",
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
    className: "previewer-field field",
    id: "preview",
    dangerouslySetInnerHTML: {
      __html: DOMPurify.sanitize(marked.parse(input))
    }
  })));
};
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));