import React, { useState } from 'react';
const FilterProduct = () => {
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    return (
        <form style={{width:'100%'}}>
            <div className="col-md3" style={{float:'left',marginRight:'10px'}}>
                <label>Filter by category:
                    <select
                        className='form-control'
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Select option"
                        value="default"
                    >
                        <option value="default" disabled>---choose a category---</option>
                        <option value="nail">Nail</option>
                        <option value="hair">Hair</option>
                        <option value="eyebrown">EyeBrown</option>
                        <option value="eyelashes">EyeLashes</option>
                    </select>
                </label>
            </div>
            <div className="col-md3" style={{float:'left'}}>
                <label>Filter by price:
                    <select
                        className='form-control'
                        type="text"
                        value={price}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Select option"
                        value="default"
                    >
                        <option value="default" disabled>---choose an option---</option>
                        <option value="desc">From high to low</option>
                        <option value="asc">From low to high</option>
                    </select>
                </label>
            </div>
            <div className="col-md3"></div>
            <div className="col-md3"></div>
        </form>
    )
}
export default FilterProduct;