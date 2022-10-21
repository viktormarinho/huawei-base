interface CloudFunctionsCardProps {
  name: string;
}

export const CloudFunctionsCard = ({ name }: CloudFunctionsCardProps) => {
  return (
    <div className="border-2 rounded flex justify-around py-5 w-full">
      <div className="bg-[#DBDBDB] p-2 rounded-2xl">{name}</div>
      <div>
        <svg
          width="49"
          height="40"
          viewBox="0 0 49 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.6653 5H16.3348C7.31907 5 0.00439453 11.7188 0.00439453 20C0.00439453 28.2812 7.31907 35 16.3348 35H32.6653C41.681 35 48.9957 28.2812 48.9957 20C48.9957 11.7188 41.681 5 32.6653 5ZM32.6653 30C26.6434 30 21.7783 25.5234 21.7783 20C21.7783 14.4688 26.6519 10 32.6653 10C38.6871 10 43.5522 14.4766 43.5522 20C43.5522 25.5312 38.6786 30 32.6653 30Z"
            fill="#FFE1A8"
          />
        </svg>
      </div>
    </div>
  );
};
