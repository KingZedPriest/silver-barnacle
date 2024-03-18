"use client"
import { useState } from 'react';
import { useTransactionStore } from '@/store/adminTransactionStore';

const Dropdown = ({ allUsers }: any) => {
  const { updateUserId, updateUserEmail, updateUserName } = useTransactionStore();
  const [selectedUserId, setSelectedUserId] = useState('');

  const handleSelectChange = (event: any) => {
    const selectedId = event.target.value;
    setSelectedUserId(selectedId);
    updateUserId(selectedId);

    // Find the selected user object
    const selectedUser = allUsers.find((user: any) => user.id === selectedId);
    if (selectedUser) {
      updateUserEmail(selectedUser.email); 
      updateUserName(`${selectedUser.firstName} ${selectedUser.lastName}`);
    }
    console.log({ selectedUser });
  };

  return (
    <div className='flex flex-col gap-y-1'>
      <label htmlFor="userDropdown" className='text-sm lg:text-base cursor-pointer'>Select Client</label>
      <select id="userDropdown" onChange={handleSelectChange} value={selectedUserId} className='capitalize cursor-pointer border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none'>
        <option value="">Select a user</option>
        {allUsers.map((user: any) => (
          <option key={user.id} value={user.id}>
            {`${user.firstName} ${user.lastName}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
