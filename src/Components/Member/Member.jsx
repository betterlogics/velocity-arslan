import React from 'react'
import "./Member.css"
import {BsFillPersonFill} from 'react-icons/bs'
import {MdDateRange} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {TbAddressBook} from 'react-icons/tb'
function Member() {
  return (
    <div>
        <div className="container">
<div>
    <h5 className='mt-5'>
    Important Note
    </h5>
  
    <p className='text-align-left'> 1 :: This online membership form submission doesn’t mean that you are registered. This form is only to get queries about new customers interested in lifetime gym registrations & monthly plans.</p>
    <p className='text-align-left'>
    2 :: After Successful form submission, our official team lead will call you back to guide you more about Registration & monthly plans. So feel free to fill out the form.
    </p>
</div>



        <div class="input-group mb-3">
  <span class="input-group-text bg-light" id="basic-addon1"><BsFillPersonFill className='ico2'/></span>
  <input type="text" class="form-control " placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text bg-light" id="basic-addon1"><MdDateRange className='ico2'/></span>
  <input type="text" class="form-control " placeholder="dd/mm/yyyy" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text bg-light" id="basic-addon1"><BsFillPersonFill className='ico2'/></span>
  <input type="text" class="form-control " placeholder="Occupation" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text bg-light" id="basic-addon1"><BsTelephoneFill className='ico2'/></span>
  <input type="text" class="form-control " placeholder="Occupation" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text bg-light" id="basic-addon1"><HiOutlineMail className='ico2'/></span>
  <input type="text" class="form-control " placeholder="Occupation" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className="">
    <p className="pir"><b> Intersted in</b></p>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>Gym Joining</option>
  <option value="1">Personal Tranings</option>
  <option value="2">weight loss challenge</option>
  <option value="3">Yoga</option>
  <option value="4">Stream $ Sauna </option>
</select>
</div> 
<div className=' l51  justify-content-start mt-4'>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Monthly</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Quarterly</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Half</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">YearlyAnnually</label>
</div>

</div>
<div class="input-group mb-3 mt-3">
  <span class="input-group-text bg-light" id="basic-addon1"><TbAddressBook className='ico2'/></span>
  <input type="text" class="form-control " placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
<div className='d-flex justify-content-start mb-3'>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2"><b>Male</b> </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2"><b>Wemale</b> </label>
</div>
</div>


<div class="input-group">
  <span class="input-group-text bg-light"><HiOutlineMail className='ico2'/></span>
  <textarea class="form-control"  placeholder="any querry" aria-label="With textarea"></textarea>
</div>
<div class="d-grid gap-2">
  <button class="btn2 " type="button">Submit</button>
  
</div>
    </div></div>
  )
}

export default Member