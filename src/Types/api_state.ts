import { AppState, Status } from "."

class ApiState<T>{
    status: Status = Status.idle;
    error: string | null = null;
    message: string | null = null;
    data: T | undefined = undefined;

    constructor(state: AppState<T>) {
        this.data = state.data
        this.error = state.error
        this.message = state.message
    }

    init() {
        return new ApiState({
            status: Status.idle,
            error: null,
            message: null,
            data: this.data
        });
    }

    loading() {
        return new ApiState({
            status: Status.loading,
            error: null,
            message: null,
            data: this.data
        });
    }

    loaded(data: T, message: string) {
        return new ApiState({
            status: Status.succeeded,
            error: null,
            message: message,
            data: data ?? this.data
        });
    }

    failed(error: string) {
        return new ApiState({
            status: Status.failed,
            error: error,
            message: null,
            data: this.data
        });
    }
}

export default ApiState