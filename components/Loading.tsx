export default function Loading() {
   const str = 'akdkvjdkfdkfdkkkfkdkkkkkdkdkkdkdkkdkdkkdkd'.split('');
   return (
      <>
         {
            str.map(function (item, index) {
               (
                  <div key={index} className="flex w-full bg-slate-500 h-10 animate-pulse mb-2 rounded-sm"></div>
               )
            })
         }
      </>
   );
};

