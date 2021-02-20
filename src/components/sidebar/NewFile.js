import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import "../../styles/NewFile.css";

import firebase from "firebase";
import { db, storage } from "../../firebase";

function getModalStyle() {
	return {
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const NewFile = () => {
	const classes = useStyles();

	const [modalStyle] = useState(getModalStyle);

	const [open, setOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [uploading, setUploading] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		setUploading(true);

		storage
			.ref(`files/${file.name}`)
			.put(file)
			.then((snapshot) => {
				console.log(snapshot);

				storage
					.ref("files")
					.child(file.name)
					.getDownloadURL()
					.then((url) => {
						db.collection("myFiles").add({
							timestamp: firebase.firestore.FieldValue.serverTimestamp(),
							caption: file.name,
							fileURL: url,
							size: snapshot._delegate.bytesTransferred,
						});
						setUploading(false);
						setOpen(false);
						setFile(null);
					});
			});
	};

	return (
		<div className='newFile'>
			<div className='newFile__container' onClick={handleOpen}>
				<AddIcon />
				<p>New</p>
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-describedby='simple-modal-description'
				aria-labelledby='simple-modal-title'>
				<div style={modalStyle} className={classes.paper}>
					<p>Select files you want to upload!</p>
					{uploading ? (
						<p>Uploading...</p>
					) : (
						<>
							<input type='file' onChange={handleChange} />
							<button onClick={handleUpload}>Upload</button>
						</>
					)}
				</div>
			</Modal>
		</div>
	);
};

export default NewFile;
