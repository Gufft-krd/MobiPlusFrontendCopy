import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import TransactionPurcheseTable from './TransactionPurcheseTable';
import Button from '../../ui/Button';
export default function TransactionDetails({
  transactionPurchese,
  purcheseLoading,
  purcheseCount,
  transaction_date,
  total_purchase,
  note,
  inventory_receipt,
  sellers,
  onCloseModal
}) {
  return (
    <div>
      <div className="rtl flex flex-row gap-5">
        <div className="flex flex-col gap-3 flex-1">
          <div className="rtl flex flex-col gap-x-10 flex-wrap gap-y-3">
            <div className='flex-shrink-0'>ناوی كڕیار : {sellers?.seller_name}</div>
            <div className='flex-shrink-0'>ژمارەی وەصڵ : {inventory_receipt}</div>

          </div>
          <div className="rtl flex flex-col gap-x-10 flex-wrap gap-y-3">
            <div className='flex-shrink-0'>بەروار :{transaction_date}
            </div>
            <div>کۆی گشتی پارە : {formatCurrency(total_purchase)} </div>
          </div>

        </div>
        <div className="my-auto h-36 lg:mx-2 w-1 bg-slate-300"></div>
        <div className="flex w-[280px] flex-col flex-1">
          <p className="">تێبینی : </p>
          <p className="">{note}</p>
        </div>
      </div>
      <div className="mt-6">
        <TransactionPurcheseTable
          transactionPurchese={transactionPurchese}
          purcheseLoading={purcheseLoading}
          purcheseCount={purcheseCount}
        />
      </div>
      <div className="flex justify-end mt-10">
        <Button
          variation="confirm"
          onClick={onCloseModal}
          className="bg-gray-200 text-gray-700"
        >
          پەشیمانبونەوە
        </Button>
      </div>
    </div>
  );
}
