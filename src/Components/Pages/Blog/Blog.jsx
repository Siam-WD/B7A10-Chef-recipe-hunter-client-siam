import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import BlogDisplay from "./BlogDisplay";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="mt-4">
      <div className="w-2/12 mx-auto flex gap-4">
        <ReactToPrint
          trigger={() => <button className="btn btn-primary">print</button>}
          content={() => ref.current}
        ></ReactToPrint>
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
          <button className="btn btn-success ">Download</button>
        </PDFDownloadLink>
      </div>
      <div ref={ref}>
        <BlogDisplay></BlogDisplay>
      </div>  
    </div>
  );
};

export default Blog;
