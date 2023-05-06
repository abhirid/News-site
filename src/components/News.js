import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
       static defaultProps={
        country:"in",
        pageSize:10,
        category:'general'
       }
       static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number
       }
       
    constructor(){
        super();
        //console.log("i am coding genius")
        this.state={
             articles:[],// articles: this.articles,
            loading:false,
            page:1

        }
    }
     async updateNews(){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=084085d5b5764ebeb09dddd7812c3e85&page=${this.props.page}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json()
      this.setState({articles: parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false})

     }




     async componentDidMount(){
        //let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=084085d5b5764ebeb09dddd7812c3e85&page=1&pagesize=${this.props.pageSize}`;
        //this.setState({loading:true})
        //let data=await fetch(url);
        //let parsedData=await data.json()
        //this.setState({articles: parsedData.articles,
        //    totalResults:parsedData.totalResults,
        //    loading:false})
        this.updateNews();
    }
    handlePrev=async()=>{
        //console.log("prev")
        //let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=084085d5b5764ebeb09dddd7812c3e85&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
        //this.setState({loading:true})
        //let data=await fetch(url);
        //let parsedData=await data.json()
       //
        //this.setState({
        //    page: this.state.page - 1,
        //    articles: parsedData.articles,
        //    loading:false
        //})
        this.updateNews();
        this.setState({page:this.state.page-1})
    }
    
    handleNext=async()=>{
       //console.log("next")
       //if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

       //}
       //   
       //else{
       //    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=084085d5b5764ebeb09dddd7812c3e85&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
       //    this.setState({loading:true})
       //    let data=await fetch(url);
       //    let parsedData=await data.json()
       //   
       //    this.setState({
       //        page: this.state.page + 1,
       //        articles: parsedData.articles,
       //        loading:false
       //    })
       //
       //}
       this.setState({page:this.state.page+1})
       this.updateNews()
    
    }
  render() {
    return (
      <>
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"40px"}}>NewLightnes - Top Headling</h1>
       {this.state.loading&& <Spinner/>}
        
      
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return  <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
            })}
       
        </div>
         <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
      
      </>
    )
  }
}

export default News
