import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentStart: {
        justifyContent: 'flex-start',
    },
    justifyContentEnd: {
        justifyContent: 'flex-end',
    },
    alignItemsStart: {
        alignItems: 'flex-start',
    },
    alignItemsEnd: {
        alignItems: 'flex-end',
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    fullWidth: {
        width: '100%',
    },
    fullHeight: {
        height: '100%',
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    paddingHorizontal: {
        paddingHorizontal: 12,
    },
    paddingVertical: {
        paddingVertical: 12,
    },
});

export default globalStyles;
