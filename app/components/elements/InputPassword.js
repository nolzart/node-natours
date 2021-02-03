const InputPassword = ({ labelContent, refAttribute, inputId }) => (
    <div className="form__group">
        <label htmlFor={inputId} className="form__label">
            {labelContent}
        </label>
        <input
            type="password"
            id={inputId}
            name={inputId}
            placeholder="••••••••"
            defaultValue=""
            className="form__input"
            ref={refAttribute}
            required
            minLength="8"
        />
    </div>
)

export default InputPassword
