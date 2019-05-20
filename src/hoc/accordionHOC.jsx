import React from 'react';
import { isUndefined } from 'lodash';
import APP from 'app';
import Constants from 'constants';
import PropTypes from 'prop-types';

const AccordionHOC = (
    WrappedView
) => {

    return class Accordion extends React.Component {

        static get propTypes() {
            return {
                defaultState: PropTypes.bool
            };
        }

        /**
         * Constructor function.
         * Sets initial state and calls other functions to perform initialization steps.
         * @param props
         */
        constructor(props) {
            super(props);
            this.bindFunctions();
            const { defaultState } = props;
            this.state = {
                isOpen: defaultState
            };
            APP.MessageBus.on(Constants.module.EVENT.ACCORDION_SWITCH, this.handleAccordionSwitch, this);
        }

        /**
         * Performs bindings for context resolution and avoid problems due to lexical scoping.
         */
        bindFunctions() {
            this.handleClick = this.handleClick.bind(this);
            this.handleOutsideClick = this.handleOutsideClick.bind(this);
            this.cacheNode = this.cacheNode.bind(this);
            this.handleAccordionSwitch = this.handleAccordionSwitch.bind(this);
        }

        /**
         * handles click on icon
         */
        handleClick() {
            this.setState(
                {
                    isOpen: !this.state.isOpen
                }
            );
        }

        /**
         * handle outside click
         */
        handleOutsideClick(event) {
            APP.Utils.log('AccordionHOC.handleOutsideClick');
            if (0 === this.el.querySelector(event.target).length && this.state.isOpen) {
                this.setState(
                    {
                        isOpen: false
                    }
                );
            }
        }

        /**
         * cache node
         */
        cacheNode(ref) {
            this.el = ref;
            if (!isUndefined(this.props.cacheNode)) {
                this.props.cacheNode(ref);
            }
        }

        handleAccordionSwitch(payload) {
            APP.Utils.log('AccordionHOC.handleAccordionSwitch');
            if (this.state.isOpen && payload.id !== this.props.data.id) {
                this.setState({
                    isOpen: false
                });
            } else if (!this.state.isOpen && payload.id === this.props.data.id) {
                this.setState({
                    isOpen: true
                });
            }
        }

        /**
         * render function
         */
        render() {
            const _animatingClass = APP.Utils.classNames('accordion', {
                'accordion__show': this.state.isOpen
            }),
                _bodyWrapperClass = APP.Utils.classNames('accordion__body', {
                    'accordion__body--show': this.state.isOpen
                });
            const _data = { ...this.props.data, isOpen: this.state.isOpen, handleClick: this.handleClick };
            return (
                <li className={this.props.wrapperClass} ref={this.cacheNode}>
                    {WrappedView.head(_data)}
                    <div className={_animatingClass}>
                        <div className={_bodyWrapperClass}>
                            {WrappedView.body(_data)}
                        </div>
                    </div>
                </li>
            );
        }
    };

};

export default AccordionHOC;
