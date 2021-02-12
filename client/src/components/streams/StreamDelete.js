import React from "react";
import Modal from "../Modal";
import history from "../../history";
import StreamForm from "./StreamForm";



const StreamDelete = () => {

  const actions = (
    <React.Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <StreamForm />
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => history.push('/streams/delete')}
      />
    </div>
  );
};

export default StreamDelete;
