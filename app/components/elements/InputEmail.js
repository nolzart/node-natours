const InputEmail = ({ refAttribute, defaultValue, inputId, labelContent }) => (
    <div className="form__group">
        <label htmlFor={inputId} className="form__label">
            {labelContent}
        </label>
        <input
            type="email"
            id={inputId}
            name={inputId}
            className="form__input"
            defaultValue={defaultValue}
            ref={refAttribute}
            required
        />
    </div>
)

export default InputEmail
