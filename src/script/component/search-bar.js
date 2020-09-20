class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
                    <style>
                    
            .wrapper{
                padding-top: 5%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .search_box{
                background: #643fef;
                position: relative;
                padding: 15px;
                border-radius: 50px;
                display: flex;
            }

            .search_box .search_btn{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #7a5cf0;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                margin-left: 15px;
                cursor: pointer;
            }

            .search_box .input_search{
                outline: none;
                border: 0;
                background: #7a5cf0;
                border-radius: 50px;
                padding: 20px 20px;
                width: 300px; 
                height: 50px;
                color: #fff;
            }

            ::placeholder {
            color: #fff;
            }

            ::-webkit-input-placeholder {
            color: #fff;
            }

            :-ms-input-placeholder {
            color: #fff;
            }
                    </style>

        <div class="wrapper">
        <div id="search-container" class="search_box search-container">
            <input type="search" class="input_search" id="searchElement" placeholder="Search meals for you">
            <div class="search_btn" id="searchButtonElement" type="submit" >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 28L22.2 22.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            


            </div>
        </div>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);