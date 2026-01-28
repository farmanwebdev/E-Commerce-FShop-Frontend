import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import { uiActions } from '../store/ui-slice';

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                dispatch(uiActions.hideNotification());
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [notification, dispatch]);

    const handleClose = () => {
        dispatch(uiActions.hideNotification());
    };

    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 max-w-md ${
                        notification.type === 'success'
                            ? 'bg-green-50 border-l-4 border-green-500'
                            : notification.type === 'error'
                            ? 'bg-red-50 border-l-4 border-red-500'
                            : 'bg-blue-50 border-l-4 border-blue-500'
                    }`}
                >
                    <div className="flex-shrink-0">
                        {notification.type === 'success' && (
                            <FaCheckCircle className="text-green-500 text-xl" />
                        )}
                        {notification.type === 'error' && (
                            <FaExclamationCircle className="text-red-500 text-xl" />
                        )}
                        {notification.type === 'info' && (
                            <FaExclamationCircle className="text-blue-500 text-xl" />
                        )}
                    </div>
                    <div className="flex-1">
                        <p
                            className={`font-semibold ${
                                notification.type === 'success'
                                    ? 'text-green-800'
                                    : notification.type === 'error'
                                    ? 'text-red-800'
                                    : 'text-blue-800'
                            }`}
                        >
                            {notification.message}
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="flex-shrink-0 text-gray-500 hover:text-gray-700"
                    >
                        <FaTimes />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
