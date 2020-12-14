import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { updateViewOrder } from "../../../../action/paginationAction";
import './pagination.scss';
import Axios from 'axios';

const ArrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
const ArrowRight = <FontAwesomeIcon icon={faArrowRight} />

class Pagination extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pageNumbers: []
    }
  }


  componentDidMount = async() => {
    const { page, pageSize } = this.props.state;
    const status = "Pending";
    const res = await Axios.post(`/order/${status}/${page}/${pageSize}`);
    const { total } = res.data
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(total/pageSize); i++){
      pageNumbers.push(i)
    }
    this.setState({
      pageNumbers: pageNumbers
    })
  }

  render(){
    const { updateViewOrder, state } = this.props;
    return (
      <div className="pagination">
          <div className="previouspage"><a href="/" onClick={this.props.leftArr}>{ArrowLeft}</a></div>
              <div className="pagenumber">
                  {this.state.pageNumbers.map(
                    (page, index) =>  (
                      <a href="/" key={index} className={page === state.page ? "actived currentPage" : "actived"} 
                      onClick={(e)=>{
                      e.preventDefault();
                      updateViewOrder({
                        pageNumber: page
                      })  
                      }}>{page}</a>
                    )
                  )}
              </div>
          <div className="nextpage"><a href="/" onClick={this.props.rightArr}>{ArrowRight}</a></div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    updateViewOrder: { pageNumber },
  } = state;
  return {
    pageNumber
  };
};

const mapActionToProps = {
    updateViewOrder
};

export default connect(mapStateToProps, mapActionToProps)(Pagination);


