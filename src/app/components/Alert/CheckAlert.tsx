import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'


export const CheckAlert = ({res} : {res:any}) => {
    const router = useRouter();
    if (res === 200) {
        Swal.fire({
            icon: "success",
            title: "Oops...",
            text: "Something went wrong!",
        });
        console.log(res);
        router.push('/pages/signin');
    } else if (res >= 400) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
        console.log(res);
    }
    return (
    <>
    </>)
}

