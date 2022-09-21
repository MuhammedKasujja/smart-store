import { Card } from "../../Components"
import * as yup from "yup"
import { AppUtils } from "../../Utils"


interface Person {
    firstName: string,
    lastname: string,
    middleName?: string,
    gender?: 'male' | 'female' | 'other',
    age: number,
    address?: string,
}
const Orders: React.FC = () => {

    const schema: yup.Schema<Person> = yup.object().shape({
        firstName: yup.string().defined(),
        lastname: yup.string().defined(),
        middleName: yup.string().optional(),
        gender: yup.mixed().optional().oneOf(['male', 'female', 'other'] as const),
        age: yup.number().min(50).defined(),
        address: yup.string().optional(),
    })


    const person: Person = {
        firstName: 'Kasujja',
        lastname: 'Muhammed',
        age: 60,
    }

    const handleValidate = () => {
        // AppUtils.showNotification('User saved', 'error')
        schema.validate(person).then((data) => {
            console.log('Validate', data)
            // AppUtils.showAlert({callback:()=>{
            //     console.log('Callback','Got I love this')
            // }});
            AppUtils.showNotification('Form validated', 'success')
        }).catch((err) => {
            AppUtils.showNotification(err, 'error')
        })
    }

    return (<div className="grid grid-cols-2 gap-4">
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <button className="btn" onClick={handleValidate}>Validate Data</button>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
        <Card>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
            <p>dhshjdskj</p>
        </Card>
    </div>)
}

export default Orders