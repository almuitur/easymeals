import React, { Component } from 'react'
import logic from '../logic'
import { Button } from "mdbreact"
import Category from './Category'

class CustomPlan extends Component {
    state = { postits: [], categories: [] }

    // May be required to do a componentDidMount to render the categories?
    // componentDidMount() {
    //     logic.listPostits()
    //         .then(postits => { this.setState({ postits }) })

    //     // TODO error handling!
    // }

    //handleSubmit would be handleSaveCustomPlan
    // handleSubmit = text => {
    //     try {
    //         logic.addPostit(text)
    //             .then(() => logic.listPostits())
    //             .then(postits => this.setState({ postits }))
    //     } catch ({ message }) {
    //         alert(message) // HORROR! FORBIDDEN! ACHTUNG!
    //     }
    // }

    // TODO error handling!

    //handleRemoveCategory
    handleRemoveMeal = id => {
        logic.removePostit(id)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
        // TODO error handling!
    }

    //to handle update drag and drop?
    // handleModifyMeal = (id, text, status) => {
    //     logic.modifyPostit(id, text, status)
    //         .then(() => logic.listPostits())
    //         .then(postits => this.setState({ postits }))
    //     // TODO error handling!
    // }

    //to handle when drag and dropping new category?
    // handleNewMeal = (id) => {
    //     console.log('NewMeal')
    // }

    //adapt to categories instead of postits? Same with text
    dragStart = (event, postitId, text) => {
        event.dataTransfer.setData('id', postitId)
        event.dataTransfer.setData('text', text)
    }

    dragOver = event => {
        event.preventDefault()
    }
    //update??
    onDrop = (event, status) => {

        const idPostit = event.dataTransfer.getData('id')
        const textPostit = event.dataTransfer.getData('text')

        this.handleModifyMeal(idPostit, textPostit, status)
    }

    render() {

        let postits = { 
            mondayBreak: [], 
            mondayLunch: [], 
            tuesdayBreak: [],
            tuesdayLunch: [],
            wednesdayBreak: [],
            wednesdayLunch: [],
            thursdayBreak: [], 
            thursdayLunch: [], 
            fridayBreak: [], 
            fridayLunch: [], 
            saturdayBreak: [], 
            saturdayLunch: [], 
            sundayBreak: [], 
            sundayLunch: [] }

        return <div className="custom-plan">
            <h1>Custom Plan</h1>

            <div className="custom-plan-categories-container">
                
                <div className="category" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                    <h1 className="category-name">Fruit</h1>
                </div>

                <div className="category" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                <h1 className="category-name">Milkshakes</h1>
                </div>
                
                <div className="category" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                <h1 className="category-name">Juices</h1>
                </div>
                
                <div className="category" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                <h1 className="category-name">Cereals</h1>
                </div>

            </div>

            <div className="meals-plan-days-container">
                <h4 className="meals-plan-day">MONDAY</h4>
                <h4 className="meals-plan-day">TUESDAY</h4>
                <h4 className="meals-plan-day">WEDNESDAY</h4>
                <h4 className="meals-plan-day">THURSDAY</h4>
                <h4 className="meals-plan-day">FRIDAY</h4>
                <h4 className="meals-plan-day">SATURDAY</h4>
                <h4 className="meals-plan-day">SUNDAY</h4>
            </div>

            <div className="meals-plan-meals-container">

                          
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'mondayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'tuesdayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'wednesdayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'thursdayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'fridayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'saturdayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'sundayBreak').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
            </div>

            <div className="meals-plan-meals-container">

                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'mondayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'tuesdayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'wednesdayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal}  />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'thursdayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal}  />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'fridayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal}  />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'saturdayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal}  />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'sundayLunch').map(postit => <Category key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onRemoveMeal={this.handleRemoveMeal}  />)}
                </div>
            </div>
            
            <div><Button onSubmit={this.handleSubmit}>Save</Button>
            <a href="#" onClick={this.props.onGoBack}>back</a>
            </div>
        </div>
    }
}

export default CustomPlan
