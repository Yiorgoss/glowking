interface ISpinner extends React.HTMLAttributes<HTMLDivElement> {
}

const Spinner = ({className}:ISpinner) => {
    return (
        <div className='flex h-full w-full items-center justify-center text-white'>
            <svg
                className={`h-[60px] w-[60px] animate-spin ${className}`}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z' />
            </svg>
        </div>
    );
};

export default Spinner
