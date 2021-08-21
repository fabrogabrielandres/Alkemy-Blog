/* eslint-disable react/display-name */
import * as React from 'react';
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';

/** Sheet-like alerts creator function
 * @param customStyles = {} an object that takes all possible props for a chakra <Alert /> component
 * @returns function (title, description) => <Alert ... /> which is the alert title and description respectively
 */
export const baseAlert = (customStyles = {}) => {
	const styles = {
		status: 'error',
		variant: 'subtle',
		height: '200px',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	};
	Object.assign(styles, customStyles);
	return ({
		title = 'Ejemplo de Alerta',
		description = 'Ejemplo de description de Alerta',
	}) => (
		<Alert {...styles}>
			<AlertIcon />
			<AlertTitle mt={4} mb={1} fontSize="lg">
				{title}
			</AlertTitle>
			<AlertDescription maxWidth="sm">{description}</AlertDescription>
		</Alert>
	);
};
export const SuccessAlert = baseAlert({ status: 'success' });
export const InformationAlert = baseAlert({ status: 'info' });
export const WarningAlert = baseAlert({ status: 'warning' });
export const ErrorAlert = baseAlert();

// take over alerts
/**
 * React functional component as
 * an Alert popup window for further action handling
 *
 * @param actionName string A verb that references what will be done
 * @param resourcenAME string A noun describing {actionName} target
 * @param description string Text further describing {actionName}
 * @param onConfirm function A function executed upon user action confirmation
 * @param onCancel function A function executed upon user action cancelation
 *
 * @returns A Button that handles de alert window display state
 * and the popup alert window itself initially hidden
 */
export const BaseAlertDialog = ({
	actionName = 'Probar',
	resourceName = 'Alerta',
	descrption = 'Se esta probando la alerta. Elige confirmar o cancelar para terminarla',
	onConfirm = () => null,
	onCancel = () => null,
	Component = undefined,
	buttonStyles = { bgColor: 'black', color: 'white' },
} = {}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const execute = (confirm = false) => {
		setIsOpen(false);
		(confirm ? onConfirm : onCancel)();
	};
	const ref = React.useRef(null);
	return (
		<>
			{Component ? (
				<span onClick={() => setIsOpen(true)}>{Component}</span>
			) : (
				<Button {...buttonStyles} onClick={() => setIsOpen(true)}>
					{actionName}
				</Button>
			)}
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={ref}
				onClose={() => execute()}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							{actionName + ' ' + resourceName}
						</AlertDialogHeader>
						<AlertDialogBody>{descrption}</AlertDialogBody>
						<AlertDialogFooter>
							<Button ref={ref} onClick={() => execute()}>
                Cancelar
							</Button>
							<Button {...buttonStyles} onClick={() => execute(true)} ml={3}>
                Confirmar
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
