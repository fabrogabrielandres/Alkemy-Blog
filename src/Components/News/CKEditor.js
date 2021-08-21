import * as React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
export const CustomCKEditor = ({ newsContent, setValue, setTouched }) => {
	return (
		<CKEditor
			editor={ClassicEditor}
			data={newsContent}
			config={{
				language: 'es',
			}}
			onChange={(event, editor) => {
				const data = editor.getData();
				setValue(data);
			}}
			onBlur={(event, editor) => {
				setTouched(true);
				const data = editor.getData();
				const e = editor.ui.element;
				e.style.border = data.length ? '' : '2px solid red';
			}}
			
		/>
	);
};
