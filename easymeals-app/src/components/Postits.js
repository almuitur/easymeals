import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Meal from './Meal'
import { Button } from "mdbreact"

class Postits extends Component {
    state = { postits: [] }

    componentDidMount() {
        logic.listPostits()
            .then(postits => { this.setState({ postits }) })

        // TODO error handling!
    }

    handleSubmit = text => {
        try {
            logic.addPostit(text)
                .then(() => logic.listPostits())
                .then(postits => this.setState({ postits }))
        } catch ({ message }) {
            alert(message) // HORROR! FORBIDDEN! ACHTUNG!
        }
    }

    // TODO error handling!

    handleRemoveMeal = id => {
        logic.removePostit(id)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
        // TODO error handling!
    }

    handleModifyMeal = (id, text, status) => {
        logic.modifyPostit(id, text, status)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
        // TODO error handling!
    }

    handleNewMeal = (id) => {
        console.log('NewMeal')
    }

    handleFindMeal = (id) => {
        console.log('FindMeal')
    }

    handleLikeMeal = (id) => {
        console.log('LikeMeal')
    }

    handleAvoidMeal = (id) => {
        console.log('AvoidMeal')
    }

    dragStart = (event, postitId, text) => {
        event.dataTransfer.setData('id', postitId)
        event.dataTransfer.setData('text', text)
    }

    dragOver = event => {
        event.preventDefault()
    }

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

        return <div className="meals-plan">
            <h1>Meals Plan</h1>
            <InputForm onSubmit={this.handleSubmit} />

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
                    
                    {this.state.postits.filter(postit => postit.status === 'mondayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'tuesdayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'wednesdayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'thursdayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'fridayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                    
                    {this.state.postits.filter(postit => postit.status === 'saturdayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayBreak')}>
                    <h2 className="day-meal">BREAKFAST</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'sundayBreak').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleFindMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
            </div>

            <div className="meals-plan-meals-container">

                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'mondayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'mondayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'tuesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'tuesdayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'wednesdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'wednesdayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'thursdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                   
                    {this.state.postits.filter(postit => postit.status === 'thursdayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'fridayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                  
                    {this.state.postits.filter(postit => postit.status === 'fridayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'saturdayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'saturdayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleLikeMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'sundayLunch')}>
                    <h2 className="day-meal">LUNCH</h2>
                 
                    {this.state.postits.filter(postit => postit.status === 'sundayLunch').map(postit => <Meal key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text)} onNewMeal={this.handleNewMeal} onFindMeal={this.handleFindMeal} onLikeMeal={this.handleFindMeal} onRemoveMeal={this.handleRemoveMeal} onAvoidMeal={this.handleAvoidMeal} onModifyMeal={this.handleModifyMeal} />)}
                </div>
            </div>
            <div>
                <Button onSubmit={this.handleSubmit}>PRINT</Button> 
                <Button onSubmit={this.handleSubmit}>SHOPPING LIST</Button> 
                <Button onSubmit={this.handleSubmit}>SAVE</Button> 
                <Button onSubmit={this.handleSubmit}>SHARE</Button> 
            </div>
        </div>
    }
}

export default Postits
