import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name : z.string().min(3,{message : "name must be atleast 3 characers"}),
    age : z.number({error : "age field is required"}).min(18,{message : "you must be older than 18"} )
});

type FormData = z.infer<typeof schema>;
const Form = () => {
 
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: zodResolver(schema)});

    
 const onsubmit = (data: FieldValues) => console.log(data);
  
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
        {...register(`name`)}
       
          
          id="name"
          type="text"
          className="form-control"
        />
         {errors.name && <p className="text-danger">{errors.name.message}</p>}
        
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
        {...register(`age`, {valueAsNumber : true})}
          
          id="age"
          type="number"
          className="form-control"
        />
              {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
