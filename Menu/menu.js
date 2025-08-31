import {Chicken,Snack,Mutton,Fish,Egg} from '../menus.js'
// popup


let item_c="";

Chicken.forEach((Chickens) => {
    item_c += `
        <div class="dish">
            <div class="div">
                <div><img src="${Chickens.image}" alt=""></div>
                <div>
                    <h3 id="name">${Chickens.name} </h3>
                    <p id="price">Price :</p><span> ₹ ${Chickens.price}</span><br>
                    <p>Quatity : </p>
                    <select name="" class="quantity-${Chickens.id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">4</option>
                        <option value="4">5</option>
                        <option value="5">6</option>
                    </select>
                </div>
            </div>
            <button id="btn" class="btn-${Chickens.id}">Add</button>
        </div><hr>`
});

document.querySelector('.list_typ_c').innerHTML= item_c;

let item_m="";

Mutton.forEach((Muttons) => {
    item_m += `
        <div class="dish">
                    <div class="div">
                        <div><img src="${Muttons.image}" alt=""></div>
                        <div>
                            <h3 id="name">${Muttons.name} </h3>
                            <p id="price">Price :</p><span> ₹ ${Muttons.price}</span><br>
                            <p>Quatity : </p>
                            <select name="" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                            </select>
                        </div>
                    </div>
                    <button id="btn">Add</button>
                </div><hr>
    `
});

document.querySelector('.list_typ_m').innerHTML= item_m;


let item_f="";

Fish.forEach((Fishs) => {
    item_f += `
        <div class="dish">
                    <div class="div">
                        <div><img src="${Fishs.image}" alt=""></div>
                        <div>
                            <h3 id="name">${Fishs.name} </h3>
                            <p id="price">Price :</p><span> ₹ ${Fishs.price}</span>
                            <p>Quatity : </p>
                            <select name="" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                            </select>
                        </div>
                    </div>
                    <button id="btn">Add</button>
                </div><hr>
    `
});

document.querySelector('.list_typ_f').innerHTML= item_f;

let item_e="";

Egg.forEach((Eggs) => {
    item_e += `
        <div class="dish">
                    <div class="div">
                        <div><img src="${Eggs.image}" alt=""></div>
                        <div>
                            <h3 id="name">${Eggs.name} </h3>
                            <p id="price">Price :</p><span> ₹ ${Eggs.price}</span>
                            <p>Quatity : </p>
                            <select name="" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                            </select>
                        </div>
                    </div>
                    <button id="btn">Add</button>
                </div><hr>
    `
});

document.querySelector('.list_typ_e').innerHTML= item_e;

let item_s="";

Snack.forEach((Snacks) => {
    item_s += `
        <div class="dish">
                    <div class="div">
                        <div><img src="${Snacks.image}" alt=""></div>
                        <div>
                            <h3 id="name">${Snacks.name} </h3>
                            <p id="price">Price :</p><span> ₹ ${Snacks.price}</span>
                            <p>Quatity : </p>
                            <select name="" id="quantity">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">4</option>
                                <option value="4">5</option>
                                <option value="5">6</option>
                            </select>
                        </div>
                    </div>
                    <button id="btn">Add</button>
                </div><hr>
    `
});

document.querySelector('.list_typ_s').innerHTML= item_s;