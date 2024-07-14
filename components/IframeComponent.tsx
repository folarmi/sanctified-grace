import React from "react";

const PdfViewerComponent = ({ base64Pdf }: any) => {
  //   const iframeSrc = `data:application/pdf;base64,${base64Pdf}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        title="Embedded PDF Viewer"
        src={base64Pdf}
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default PdfViewerComponent;
