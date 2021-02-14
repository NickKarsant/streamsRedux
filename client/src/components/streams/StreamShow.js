import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";


class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }


  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {/* <ReactPlayer url=""/> */}
        <h1 className="header">{this.props.stream.title}</h1>
        <h5 className="content">{this.props.stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

