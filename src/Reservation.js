import { useForm } from 'react-hook-form';

function Reservation(){

   const {
      register,
      formState: { errors },
    } = useForm();


    return(
      <body>
        <form style="display: grid; max-width: 200px; gap: 20px">
         <div>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" {...register('res-date', { required: true })} />
            {errors.res-date && <div>入力が必須の項目です</div>}
        </div>
        <div>
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time " {...register('res-time', { required: true })}>
           <option>17:00</option>
           <option>18:00</option>
           <option>19:00</option>
           <option>20:00</option>
           <option>21:00</option>
           <option>22:00</option>
         </select>
         {errors.res-time && <div>入力が必須の項目です</div>}
        </div>
        <div>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  {...register('guests', { required: true })}/>
            {errors.guests && <div>入力が必須の項目です</div>}
        </div>
        <div>
        <label for="occasion">Occasion</label>
        <select id="occasion" {...register('occasion', { required: true })}>
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        {errors.occasion && <div>入力が必須の項目です</div>}
        </div>
        <input type="submit" value="Make Your reservation"/>
     </form>
     </body>
    );
}

export default Reservation;