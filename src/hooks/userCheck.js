import { useState, useEffect } from 'react';
import { rootServer } from '../resources/consts';
import { objPUT } from '../resources/querys';
import { ErrorConnect } from '../resources/mapping';

const putCheck = (id, check) => {
	return fetch(`${rootServer}/entregados/${id}`, objPUT(check))
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
			return res.fecha_entregado;
		})
		.catch(() => {
			throw new ErrorConnect();
		});
};

export function useCheck({ delivered, deliveredDate, id }) {
	const [check, setCheck] = useState(delivered);
	const [loadCheck, setLoadCheck] = useState(false);
	const [deliDate, setDeliDate] = useState(deliveredDate);

	useEffect(() => {
		const controlQueryCheck = async () => {
			try {
				const res = await putCheck(id, !check);

				setDeliDate(res);
				setCheck(!check);
			} catch (err) {
				if (err instanceof ErrorConnect) alert(err);
			} finally {
				setLoadCheck(false);
			}
		};
		if (loadCheck) controlQueryCheck();
	}, [loadCheck]);

	return { check, loadCheck, deliDate, setLoadCheck };
}
