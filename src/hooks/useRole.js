import { useEffect, useState } from "react"

const useRole = email => {
    const [userRole, setUserRole] = useState('');
    const [UserRoleLoading, setUserRoleLoading] = useState(true);
    
    useEffect(() => {
        if (email) {
            fetch(`https://resale-server.vercel.app/userRole/${email}`)
                .then(res => res.json())
                .then(data => {
                    setUserRole(data.role);
                    setUserRoleLoading(false);
                })
        }
    }, [email]);

    return [userRole, UserRoleLoading];
}

export default useRole;