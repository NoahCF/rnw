import React from 'react';

class ItemForm extends React.Component {

    hideForm() {
        console.log("hide form");
    }

    onSubmitForm(event) {
        console.log("form submitted");
    }


    onChangeInput(event) {
        console.log("input changed");
    }

    render() {

        var item = this.props.item;

        if (!item) {
            return '';
        }

        return (
            <div>
                <form>
                    <div className="close_form">
                        <span onClick={this.hideForm}>[🗙]</span>
                    </div>
                    <h3>Create a new item</h3>
                    <p>
                        <label>ID:</label>
                        <input name="id" 
                               onChange={(event) => this.onChangeInput(event)}  
                               value={item.id} />
                    </p>
                    <p>
                        <label>Title:</label>
                        <input name="title" 
                               onChange={(event) => this.onChangeInput(event)}  
                               value={item.title} />
                    </p>
                    <p>
                        <label>Artist:</label>
                        <input name="artist" 
                               onChange={(event) => this.onChangeInput(event)}  
                               value={item.artist} />
                    </p>
                    <p>
                        <label>Album:</label>
                        <input name="album" 
                               onChange={(event) => this.onChangeInput(event)}  
                               value={item.album} />
                    </p>

                    <div className="create">
                        <button onClick={(event) => this.onSubmitForm(event) }>
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ItemForm;