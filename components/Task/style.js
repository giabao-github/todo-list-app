import { StyleSheet } from 'react-native';
import color from '../../contains/color';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
  },
  selectedItem: {
    borderColor: 'magenta',
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normal: {
    backgroundColor: color.secondary,
  },
  important: {
    backgroundColor: color.important,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    backgroundColor: color.edit,
    marginRight: 8,
  },
  delete: {
    backgroundColor: color.delete,
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: color.white,
  },
  task: {
    marginLeft: 10,
    width: '80%',
    fontSize: 16,
    fontWeight: '500',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    opacity: 0.4,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    fontSize: 20,
    fontWeight: '500',
  },
  modalTextInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  modalButton: {
    width: 80,
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: color.white,
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 15,
  },
  warningText: {
    maxWidth: 200,
    color: 'red',
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'left',
  },
  rightAction: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default styles;