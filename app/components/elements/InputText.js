const InputText = ({ labelContent, defaultValue, refAttribute, inputId }) => (
    <div className="form__group">
        <label htmlFor={inputId} className="form__label">
            {labelContent}
        </label>
        <input
            type="text"
            id={inputId}
            name={inputId}
            className="form__input"
            defaultValue={defaultValue}
            ref={refAttribute}
            required
        />
    </div>
)

export default InputText
