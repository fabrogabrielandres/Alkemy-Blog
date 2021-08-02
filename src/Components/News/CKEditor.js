import * as React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";
export const CustomCKEditor = ({ newsContent, setValue }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={newsContent}
      config={{
        language: "es",
      }}
      onReady={(editor) => {
        //console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data);
        //console.log("where's the data?", data);
      }}
      onBlur={(event, editor) => {
        //console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        //console.log("Focus.", editor);
      }}
    />
  );
};
