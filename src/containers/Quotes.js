import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
      let quoteList = this.props.quotes.map(e => <QuoteCard key={e.id} quote={e}/>);
      return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                {quoteList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mapStateToProps = ({quotes}) => {
    return {
        quotes
    }
};
export default connect(mapStateToProps)(Quotes);
