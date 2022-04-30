import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal({isOpen,setIsOpen}) {
 
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sign Up
                  </Dialog.Title>
                  <div className="mt-2">
                  <div className='border-2 border-sky-100 h-3/6 rounded-md'>
              <div className='py-4 px-2'>
                <label htmlFor="name" > Full Name</label><br/>
                  <input type="text" id='name' placeholder='Gayathrivasu' className='w-full outline-none'/>
              </div>
              <div className='py-4 px-2'>
                <label htmlFor="email" > Email Address</label><br/>
                  <input type="email" id='email' placeholder='xyz@gmail.com' className='w-full outline-none'/>
              </div>
              <div className='py-4 px-2'>
                <label htmlFor="password" > Password</label><br/>
                  <input type="password" id='password' placeholder='*****' className='w-full outline-none'/>
              </div>
            <div className='flex gap-3 w-full mb-2  px-2'>
            <input type="submit"
              value="Register" 
              className='shadow-md p-1 text-black rounded-md w-1/2 hover:bg-emerald-500 hover:text-white'/>
               <button
                      type="button"
                      className="shadow-md w-1/2 focus:outline-none inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium  hover:text-white hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Close
                    </button>
            </div>
             
           </div>
          
           
         </div>
         
               

                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
