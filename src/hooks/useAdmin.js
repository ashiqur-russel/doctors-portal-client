import { useState, useEffect } from "react";
export const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAdmin(data.isAdmin);
        setIsAdminLoading(false);
      });
  }, [email]);

  return [isAdmin, isAdminLoading];
};
