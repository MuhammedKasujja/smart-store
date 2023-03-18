import { AppState, Status } from "."

class ApiState<T>{
    status: Status = Status.idle;
    error: string | undefined = undefined;
    message: string | undefined = undefined;
    data: T | undefined = undefined;

    constructor(state: AppState<T>) {
        this.data = state.data
        this.error = state.error
        this.message = state.message
        this.status = state.status
    }

    init() {
        return new ApiState({
            status: Status.idle,
            data: this.data
        });
    }

    loading() {
        return new ApiState({
            status: Status.loading,
            data: this.data
        });
    }

    success(data: T, message?: string) {
        return new ApiState({
            status: Status.succeeded,
            message: message,
            data: data ?? this.data
        });
    }

    failed(error: string) {
        return new ApiState({
            status: Status.failed,
            error: error,
            data: this.data
        });
    }
}

export default ApiState