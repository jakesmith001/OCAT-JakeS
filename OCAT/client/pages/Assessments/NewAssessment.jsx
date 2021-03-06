import React from 'react';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';
import { useForm } from 'react-hook-form';

export const NewAssessment = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='cat_name'>Cat Name: </label>
      <input {...register("cat_name", {required: 'Please enter your cat\'s name', maxLength: 20})} name='cat_name' id='cat_name'/>

      <label htmlFor='cat_date_of_birth'>Cat Date of Birth: </label>
      <input type='date' {...register("cat_date_of_birth", {required: 'Please enter your cat\'s date of birth', })} name='cat_date_of_birth' id='cat_date_of_birth'/>

      <label htmlFor="prevEncounter">Previous Contact with CAT Judicial System: </label>
      <select {...register("prevEncounter", {required: 'Select an option'})} name="prevEncounter" id="prevEncounter">
        <option value=""></option>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      {errors.prevEncounter && <p>{errors.prevEncounter.message}</p>}
      
      <label htmlFor="numAltercations">Number of altercations with other cats: </label>
      <select {...register("numAltercations", {required: 'Select an option'})} name="numAltercations" id="numAltercations">
        <option value=""></option>
        <option value="0">0-3</option>
        <option value="1">3+</option>
      </select>
      {errors.numAltercations && <p>{errors.numAltercations.message}</p>}
      
      <label htmlFor="ownerAltercations">Number of altercations with owner: </label>
      <select {...register("ownerAltercations", {required: 'Select an option'})} name="ownerAltercations" id="ownerAltercations">
        <option value=""></option>
        <option value="0">0-10</option>
        <option value="1">10+</option>
      </select>
      {errors.ownerAltercations && <p>{errors.ownerAltercations.message}</p>}
      
      <label htmlFor="playsWithDogs">Plays well with dogs: </label>
      <select {...register("playsWithDogs", {required: 'Select an option'})} name="playsWithDogs" id="playsWithDogs">
        <option value=""></option>
        <option value="0">Yes</option>
        <option value="1">No</option>
      </select>
      {errors.playsWithDogs && <p>{errors.playsWithDogs.message}</p>}
      
      <label htmlFor="hissing">Hisses at strangers: </label>
      <select {...register("hissing", {required: 'Select an option'})} name="hissing" id="hissing">
        <option value=""></option>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>
      {errors.hissing && <p>{errors.hissing.message}</p>}

      <input type="submit" />
    </form>
  )
};
